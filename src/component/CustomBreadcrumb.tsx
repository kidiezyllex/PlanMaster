import React from 'react';
import { Breadcrumb } from 'antd';
import { IconHome, IconSearch } from '@tabler/icons-react';

const CustomBreadcrumb = () => {

  const generateBreadcrumbItems = () => {
    const pathnames = location.pathname.split('/').filter(x => x);

    const items = [
      {
        href: '/',
        title: <IconHome />,
      },
    ];

    pathnames.forEach((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;
      const isInvestigate = value.substring(0, 11) === 'investigate';

      if (isInvestigate) {
        if (value.substring(12, 15) === 'add') {
          items.push({
            href: '',
            title: (
              <>
                <IconSearch />
                <span>Investigate by address</span>
              </>
            ),
          });
        } else {
          items.push({
            href: '',
            title: (
              <>
                <IconSearch />
                <span>Investigate by transaction hash</span>
              </>
            ),
          });
        }
      } else {
        items.push({
          href: isLast ? to : '',
          title: isLast ? (
            <>
              <IconSearch />
              <span>{value}</span>
            </>
          ) : (
            <>
              <span>{value}</span>
            </>
          ),
        });
      }

      // items.push({ // trong trường hợp sidebar hierachy có 3 level
      //   href: !isLast ? to : '',
      //   title: !isLast ? (
      //     <>
      //       <UserOutlined />
      //       <span>{value}</span>
      //     </>
      //   ) : (
      //     <>
      //       <span>{value}</span>
      //     </>
      //   ),
      // });
    });
    return items;
  };

  return <Breadcrumb className="py-4" items={generateBreadcrumbItems()} />;
};

export default CustomBreadcrumb;
