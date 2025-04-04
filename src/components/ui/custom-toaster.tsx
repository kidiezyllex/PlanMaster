"use client"

import { Toaster as SonnerToaster } from "sonner"

interface ToasterProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"
  richColors?: boolean
  closeButton?: boolean
  duration?: number
}

export function CustomToaster({
  position = "top-right",
  richColors = true,
  closeButton = true,
  duration = 4000,
  ...props
}: ToasterProps) {
  return (
    <SonnerToaster
      position={position}
      richColors={richColors}
      closeButton={closeButton}
      duration={duration}
      className="toaster-custom"
      toastOptions={{
        classNames: {
          success: "toast-success",
          error: "toast-error",
          warning: "toast-warning",
          info: "toast-info",
        },
      }}
      {...props}
    />
  )
}

