package com.chui.chui_api.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.chui.chui_api.domain.user.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}