package com.nankai.dlt.service;

import com.nankai.dlt.bean.User;
import com.nankai.dlt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /**
     * 查询单个用户
     * @param user
     * @return
     */
    public User getUser(User user){
        return userRepository.selectUser(user);
    }


    /**
     * 新增用户
     * @param user
     * @return
     */
    public boolean addUser(User user) {
        if (userRepository.insertUser(user)){
            return true;
        }else {
            return false;
        }
    }

    /**
     * 删除用户
     * @param user
     * @return
     */
    public boolean delUser(User user) {
        if (userRepository.deleteUser(user)){
            return true;
        }else return false;
    }

    /**
     * 修改用户信息
     * @param user
     * @return
     */
    public boolean updateUser(User user) {
        if (userRepository.updateUser(user)){
            return true;
        }else {
            return false;
        }
    }

    /**
     * 查询所有的用户信息
     * @return List<User>
     */
    public List<User> getAllUsers() {

        return userRepository.getAllUsers();
    }
}
