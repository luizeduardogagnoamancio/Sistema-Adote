public class Animal {
    private String nome;
    private String descricao;
    private int idade;
    private boolean possuiRaca;
    private int tipoAnimal;
    private List<String> imagens;

    public Animal(){

    }
}


public class Endereco {
    private String rua;
    private int numero;
    private String bairro;
    private String cidade;
    private String uf;
    private String cep;

    public Endereco(){

    }
}

public class Feedback {
    private String descricao;

    public Feedback(){

    }
}

public class Form {
    private String nome;
    private String email;
    private String telefone;
    private Endereco Endereco;

    public Form(){

    }
}

public class Pedido {

    private Form form;
    private Feedback feedback;

    public Pedido(){

    }
}

public class Usuario {

    private String nome;
    private String email;
    private String telefone;
    private String senha;
    private Endereco endereco;

    public Usuario(){

    }
}
