import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllCategoriesThunk } from '../../redux/slices/category/categoryThunks';
import type { OneCategoryType } from '../../types/questionType';

const { Sider } = Layout;

type SideBarProps = {
  onSelectCategory: (id: number) => void;
};

function SideBar({ onSelectCategory }: SideBarProps): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.categories);
  const navigate = useNavigate();

  useEffect(() => {
    void dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  const items: MenuProps['items'] = categories.map((category: OneCategoryType) => ({
    key: category.id.toString(),
    label: category.category,
    onClick: () => {
      onSelectCategory(category.id);
      navigate(`/categories/${category.id}/random`);
    },
  }));

  return (
    <Sider width={200} style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[categories.length > 0 ? categories[0].id.toString() : '']}
        style={{ height: '100%' }}
        items={items}
      />
    </Sider>
  );
}

export default SideBar;
