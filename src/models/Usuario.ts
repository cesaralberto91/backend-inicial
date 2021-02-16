import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuario")
export class Usuario {
  @PrimaryGeneratedColumn({ type: "int", name: "codigo" })
  codigo: number;

  @Column("varchar", { name: "nome", length: 100 })
  nome: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("varchar", { name: "senha", length: 20 })
  senha: string;

}
