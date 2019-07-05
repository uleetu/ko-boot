package org.ko.sigma.rest.menu.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.ko.sigma.core.exception.TransactionalException;
import org.ko.sigma.core.type.SystemCode;
import org.ko.sigma.core.type.SystemConstants;
import org.ko.sigma.data.entity.Menu;
import org.ko.sigma.rest.menu.condition.MenuQueryPageCondition;
import org.ko.sigma.rest.menu.dto.MenuDTO;
import org.ko.sigma.rest.menu.repository.MenuRepository;
import org.ko.sigma.rest.menu.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(rollbackFor = Throwable.class)
public class MenuServiceImpl extends ServiceImpl<MenuRepository, Menu> implements MenuService {

    @Autowired private MenuRepository menuRepository;

    @Override
    public IPage<MenuDTO> queryMenuList(MenuQueryPageCondition condition) {
        return menuRepository.queryMenuList(condition);
    }

    @Override
    public Menu queryMenuInfo(Long id) {
        return menuRepository.selectById(id);
    }

    @Override
    public List<MenuDTO> queryMenuByRoleCode(String roleCode) {
        return menuRepository.queryMenuByRoleCode(roleCode);
    }

    @Override
    public List<MenuDTO> queryMenuByParentId(Long parentId) {
        return menuRepository.queryMenuByParentId(parentId);
    }

    @Override
    public Long createMenu(Menu menu) {
        if (menuRepository.insert(menu) == 0) {
            throw new TransactionalException(SystemCode.INSERT_ERROR);
        }
        return menu.getId();
    }

    @Override
    public Menu updateMenu(Long id, Menu menu) {
        menu.setId(id);
        if (menuRepository.updateById(menu) == 0) {
            throw new TransactionalException(SystemCode.UPDATE_ERROR);
        }
        return menu;
    }

    @Override
    public Long deleteMenu(Long id) {
        Menu menu = new Menu();
        menu.setId(id);
        if (menuRepository.updateById(menu) == 0) {
            throw new TransactionalException(SystemCode.DELETE_ERROR);
        }
        return id;
    }
}
