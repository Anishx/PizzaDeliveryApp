package com.pizza.app.pizzabe.appuser;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService{

    private final static String USER_NOT_FOUND_MESSAGE = "user with email %s not found";

    @Autowired
    private final AppUserRepository appUserRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();

    @Override
    public UserDetails loadUserByUsername(String emailUsername) 
    		throws UsernameNotFoundException {
        return appUserRepository
        		.findByEmail(emailUsername).orElseThrow(()->new UsernameNotFoundException(
        				String.format(USER_NOT_FOUND_MESSAGE, emailUsername)));
    }

    public String signUpUser(AppUser appUser){
        boolean userExists = appUserRepository
                .findByEmail(appUser.getUsername())
                .isPresent();

        if(userExists){
            throw new IllegalStateException("User with email already exists");
        }
        String pwd = bCryptPasswordEncoder.encode(appUser.getPassword());
        appUser.setPassword(pwd);
        appUserRepository.save(appUser);

        //send conf token

        return "DONE";
    }
}
