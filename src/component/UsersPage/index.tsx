"use client"

import { useState } from "react"
import { format } from "date-fns"
import {
  IconUserPlus,
  IconTrash,
  IconEdit,
  IconUsers,
  IconUserCheck,
  IconShieldLock,
  IconCalendarTime,
  IconMail,
  IconId,
  IconUserCircle,
  IconAlertTriangle,
  IconSearch,
  IconFilter,
  IconRefresh,
  IconSortAscending,
} from "@tabler/icons-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { mockUsers } from "@/mocks/mockUsers"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
const generateUniqueId = (() => {
  const usedIds = new Set<string>()
  return () => {
    let id: string
    do {
      id = Math.floor(Math.random() * 1000000).toString() // Generate a random number and convert to string
    } while (usedIds.has(id))
    usedIds.add(id)
    return id
  }
})()
// Define user type
interface User {
  id: string
  email: string
  passwordHash: string
  name: string
  role: "admin" | "user" | "editor"
  createdAt: Date
}

export default function UsersPage() {
  const [users, setUsers] = useState(mockUsers)
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState<User | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
    role: "user" as "admin" | "user" | "editor",
  })
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const [filterRole, setFilterRole] = useState<"admin" | "user" | "editor" | "all">("all")
  const [sortField, setSortField] = useState<"name" | "email" | "createdAt">("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  // Add new user
  const handleAddUser = () => {
    // Simple validation
    if (!newUser.email || !newUser.password || !newUser.name) {
      toast.error("Vui lòng điền đầy đủ các trường bắt buộc.")
      return
    }

    const user: User = {
      id: generateUniqueId(),
      email: newUser.email,
      passwordHash: `$2a$12$${Math.random().toString(36).substring(2, 15)}`,
      name: newUser.name,
      role: newUser.role,
      createdAt: new Date(),
    }

    setUsers([...users, user])
    setIsAddUserOpen(false)
    setNewUser({
      email: "",
      password: "",
      name: "",
      role: "user",
    })

    toast.success(`${user.name} đã được thêm thành công.`)
  }

  // Delete user
  const handleDeleteUser = () => {
    if (userToDelete) {
      setUsers(users.filter((user) => user.id !== userToDelete.id))
      toast.success(`${userToDelete.name} đã được xóa thành công.`)
      setUserToDelete(null)
    }
  }

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.includes(searchTerm)) &&
      (filterRole === "all" || user.role === filterRole)
  )

  // Sort users based on selected field and order
  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortField === "name") {
      return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    } else if (sortField === "email") {
      return sortOrder === "asc" ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email)
    } else if (sortField === "createdAt") {
      return sortOrder === "asc" ? a.createdAt.getTime() - b.createdAt.getTime() : b.createdAt.getTime() - a.createdAt.getTime()
    }
    return 0
  })

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedUsers.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Reset search
  const handleResetSearch = () => {
    setSearchTerm("")
  }

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <IconUsers className="h-5 w-5 text-gray-700 mr-2" />
            <h1 className="text-xl font-bold text-gray-800">Quản lý người dùng</h1>
          </div>
          <Button onClick={() => setIsAddUserOpen(true)} className="bg-blue-500 hover:bg-blue-400 text-white">
            <IconUserPlus className="mr-2 h-4 w-4" />
            Thêm người dùng
          </Button>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Tìm kiếm người dùng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-white border-gray-200 focus:border-gray-400 focus:ring-0"
            />
          </div>
          <div className="flex gap-2">

            <Select value={filterRole} onValueChange={(value: "admin" | "user" | "editor" | "all") => setFilterRole(value)}>
              <SelectTrigger className="w-[120px] border-gray-300 text-gray-800 focus:border-gray-500 focus:ring-gray-500">
                <IconFilter className="h-4 w-4" />
                <SelectValue placeholder="Vai trò" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300">
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortField} onValueChange={(value: "name" | "email" | "createdAt") => setSortField(value)}>
              <SelectTrigger className="w-[120px] border-gray-300 text-gray-800 focus:border-gray-500 focus:ring-gray-500">
                <IconSortAscending className="h-4 w-4" />
                <SelectValue placeholder="Trường" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300">
                <SelectItem value="name">Tên</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="createdAt">Ngày tạo</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")} className="flex items-center gap-1 text-gray-600 border-gray-300 hover:bg-gray-100">
              {sortOrder === "asc" ? "Tăng dần" : "Giảm dần"}
            </Button>
            {searchTerm && (
              <Button variant="ghost" onClick={handleResetSearch} className="flex items-center gap-1 text-gray-600 hover:bg-gray-100">
                <IconRefresh className="h-4 w-4" />
                Đặt lại
              </Button>
            )}
          </div>
        </div>

        {/* User Table */}
        <div className="rounded-md border border-gray-200">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="font-medium text-gray-600">
                  <div className="flex items-center">
                    <IconId className="h-4 w-4 mr-1 text-gray-500" />
                    User ID
                  </div>
                </TableHead>
                <TableHead className="font-medium text-gray-600">
                  <div className="flex items-center">
                    <IconUserCircle className="h-4 w-4 mr-1 text-gray-500" />
                    Tên
                  </div>
                </TableHead>
                <TableHead className="font-medium text-gray-600">
                  <div className="flex items-center">
                    <IconMail className="h-4 w-4 mr-1 text-gray-500" />
                    Email
                  </div>
                </TableHead>
                <TableHead className="font-medium text-gray-600">
                  <div className="flex items-center">
                    <IconShieldLock className="h-4 w-4 mr-1 text-gray-500" />
                    Mật khẩu
                  </div>
                </TableHead>
                <TableHead className="font-medium text-gray-600">
                  <div className="flex items-center">
                    <IconUserCheck className="h-4 w-4 mr-1 text-gray-500" />
                    Vai trò
                  </div>
                </TableHead>
                <TableHead className="font-medium text-gray-600">
                  <div className="flex items-center">
                    <IconCalendarTime className="h-4 w-4 mr-1 text-gray-500" />
                    Ngày tạo
                  </div>
                </TableHead>
                <TableHead className="font-medium text-right text-gray-600">Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {currentItems.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-50 border-b border-gray-200 last:border-b-0">
                  <TableCell className="font-mono text-sm text-gray-700">{user.id}</TableCell>
                  <TableCell className="text-gray-800">{user.name}</TableCell>
                  <TableCell className="text-gray-800">{user.email}</TableCell>
                  <TableCell className="font-mono text-xs truncate max-w-[150px] text-gray-600">{user.passwordHash}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit ${user.role === "admin"
                          ? "bg-purple-100 text-purple-800"
                          : user.role === "editor"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-green-100 text-green-800"
                        }`}
                    >
                      {user.role === "admin" && <IconShieldLock className="h-3 w-3 mr-1" />}
                      {user.role === "editor" && <IconEdit className="h-3 w-3 mr-1" />}
                      {user.role === "user" && <IconUserCircle className="h-3 w-3 mr-1" />}
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-700">{format(user.createdAt, "MMM d, yyyy")}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      >
                        <IconEdit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setUserToDelete(user as User)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <IconTrash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10 text-gray-500 bg-white">
                    <div className="flex flex-col items-center">
                      <IconAlertTriangle className="h-10 w-10 text-gray-400 mb-2" />
                      {searchTerm ? (
                        <p>Không tìm thấy người dùng phù hợp với &quot;{searchTerm}&quot;. Hãy thử tìm kiếm với từ khóa khác.</p>
                      ) : (
                        <p>Không tìm thấy người dùng. Thêm người dùng mới để bắt đầu.</p>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={page === currentPage}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Add User Dialog */}
        <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle className="flex items-center text-gray-800">
                <IconUserPlus className="h-5 w-5 mr-2 text-gray-700" />
                Thêm người dùng mới
              </DialogTitle>
              <DialogDescription className="text-gray-600">Nhập thông tin cho người dùng mới.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right flex items-center justify-end text-gray-700">
                  <IconUserCircle className="h-4 w-4 mr-1 text-gray-500" />
                  Tên
                </Label>
                <Input
                  id="name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="col-span-3 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right flex items-center justify-end text-gray-700">
                  <IconMail className="h-4 w-4 mr-1 text-gray-500" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="col-span-3 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right flex items-center justify-end text-gray-700">
                  <IconShieldLock className="h-4 w-4 mr-1 text-gray-500" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="col-span-3 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  placeholder="••••••••"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right flex items-center justify-end text-gray-700">
                  <IconUserCheck className="h-4 w-4 mr-1 text-gray-500" />
                  Role
                </Label>
                <Select
                  value={newUser.role}
                  onValueChange={(value: "admin" | "user" | "editor") => setNewUser({ ...newUser, role: value })}
                >
                  <SelectTrigger className="col-span-3 border-gray-300 text-gray-800 focus:border-gray-500 focus:ring-gray-500">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-300">
                    <SelectItem value="admin" className="flex items-center text-gray-700 hover:bg-gray-100">
                      <div className="flex items-center">
                        <IconShieldLock className="h-4 w-4 mr-2 text-gray-500" />
                        Admin
                      </div>
                    </SelectItem>
                    <SelectItem value="editor" className="flex items-center text-gray-700 hover:bg-gray-100">
                      <div className="flex items-center">
                        <IconEdit className="h-4 w-4 mr-2 text-gray-500" />
                        Editor
                      </div>
                    </SelectItem>
                    <SelectItem value="user" className="flex items-center text-gray-700 hover:bg-gray-100">
                      <div className="flex items-center">
                        <IconUserCircle className="h-4 w-4 mr-2 text-gray-500" />
                        User
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddUserOpen(false)} className="gap-1 text-gray-600 border-gray-300 hover:bg-gray-100">
                Cancel
              </Button>
              <Button type="submit" onClick={handleAddUser} className="bg-gray-700 text-white hover:bg-gray-600 gap-1">
                <IconUserPlus className="h-4 w-4" />
                Thêm người dùng
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete User Confirmation */}
        <AlertDialog open={userToDelete !== null} onOpenChange={(open) => !open && setUserToDelete(null)}>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center text-gray-800">
                <IconAlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Bạn có chắc chắn?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-gray-600">
                Điều này sẽ xóa tài khoản và tất cả dữ liệu liên quan của <span className="font-medium text-gray-700">{userToDelete?.name}</span>
                associated data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-gray-600 border-gray-300 hover:bg-gray-100">Hủy bỏ</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteUser} className="bg-red-500 text-white hover:bg-red-600 gap-1">
                <IconTrash className="h-4 w-4" />
                Xóa
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}

