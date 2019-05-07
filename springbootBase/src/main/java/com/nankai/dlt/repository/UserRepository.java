package com.nankai.dlt.repository;

import com.nankai.dlt.bean.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository {

    /**
     *查询用户
     * @param user
     * @return User
     */
    User selectUser(User user);

    /**
     * 插入用户
     * @param user
     * @return boolean
     */
    boolean insertUser(User user);

    /**
     * 修改用户
     * @param user
     * @return boolean
     */
    boolean updateUser(User user);

    /**
     * 删除用户
     * @param user
     * @return boolean
     */
    boolean deleteUser(User user);

    /**
     * 查询所有的用户信息
     * @return
     */
    List<User> getAllUsers();
}
