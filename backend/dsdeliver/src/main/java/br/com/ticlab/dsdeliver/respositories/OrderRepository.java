package br.com.ticlab.dsdeliver.respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ticlab.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
