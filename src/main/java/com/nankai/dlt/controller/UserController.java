package com.nankai.dlt.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.nankai.dlt.bean.User;
import com.nankai.dlt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RequestMapping("/user")
@Controller
public class UserController {

    @Autowired
    UserService userService;


    @RequestMapping("/index")
    public String index(Model model,@RequestParam(value="page", required=false, defaultValue="1") int page) {
        //获取第1页，3条内容，默认查询数据库中记录的总数count
        PageHelper.startPage(page, 3);
        List<User> resultList = userService.getAllUsers();
        //用PageInfo对结果进行包装
        PageInfo pageResult = new PageInfo(resultList);

        model.addAttribute("users",pageResult.getList());
        model.addAttribute("userCount",pageResult.getTotal());
        return "/user/index"; //user文件夹下的index.html路径。默认为转发请求。
    }

    @RequestMapping("/signup")
    public String signup() {
        return "/user/signup";
    }

    //@RequestMapping(value = "/getUser",method = {RequestMethod.GET})
    @GetMapping(value = "/getUser")
    @ResponseBody
    public User getUser(User user, Model model) throws Exception{
        User user1 = userService.getUser(user);
        //model.addAttribute("user",user1);
        //return "user/index";
        return user1;
    }

    @RequestMapping(value = "/delUser")
    @ResponseBody
    public Map<String,Boolean> delUser(User user) throws Exception{
        HashMap result = new HashMap();
        if (userService.delUser(user)){
            result.put("isDel",true);
            return result;
        }else {
            result.put("isDel",false);
            return result;
        }
    }

    @PostMapping(value = "/updateUser")
    @ResponseBody
    public Map<String,Object> updateUser(@RequestBody User user) throws Exception{
        HashMap result = new HashMap();
        if (userService.updateUser(user)){
            result.put("isUpdate",true);
            result.put("user",user);
        }else {
            result.put("isUpdate",false);
            result.put("user",user);
        }
        return result;
    }

    @PostMapping(value = "/signupUser")
    public String signup(User user, HttpSession session) throws Exception{
        if (userService.addUser(user)){
            session.setAttribute("currentLoginUser",user);
        }

        return "redirect:/user/index"; //user文件夹下的index.html路径。重定向。
    }
}
