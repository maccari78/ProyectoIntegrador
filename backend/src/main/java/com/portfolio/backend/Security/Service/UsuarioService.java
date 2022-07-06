package com.portfolio.backend.Security.Service;

import com.portfolio.backend.Security.Entity.Usuario;
import com.portfolio.backend.Security.Repository.iUsuarioRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service 
@Transactional 
public class UsuarioService {
    
    @Autowired
    iUsuarioRepository iusuUsuarioRepository;
    
    public Optional<Usuario> getByNombreUsuario(String nombreUsuario) {
        return iusuUsuarioRepository.findByNombreUsuario(nombreUsuario);
    }
    
    public boolean existsByNombreUsuario(String nombreUsuario){
        return iusuUsuarioRepository.existsByNombreUsuario(nombreUsuario);
    }
    
    public boolean existsByEmail(String email){
        return iusuUsuarioRepository.existsByEmail(email);
    }
    
    public void save(Usuario usuario){
        iusuUsuarioRepository.save(usuario);
    }
}
