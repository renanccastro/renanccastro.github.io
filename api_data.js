define({ api: [
  {
    "type": "post",
    "url": "/loginandcreatifnotexistsfacebook/",
    "title": "Cria um usuário pelo facebook ou loga se já existir.",
    "name": "PostLoginAndCreateIfNotExistsFacebook",
    "group": "Login_-_Facebook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "accesstoken",
            "optional": false,
            "description": "<p>Facebook accesstoken do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "facebookuserid",
            "optional": false,
            "description": "<p>User id do usuário no facebook.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso - 200": [
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "profile",
            "optional": false,
            "description": ""
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "profile._id",
            "optional": false,
            "description": "<p>id do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "profile.name",
            "optional": false,
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "profile.email",
            "optional": false,
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "profile.gender",
            "optional": false,
            "description": "<p>Sexo do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "Date",
            "field": "profile.birthday",
            "optional": false,
            "description": "<p>Data de nascimento do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "created_now",
            "optional": false,
            "description": "<p>YES/NO</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "<p>O token do servidor para ser usado na autenticação</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403 - Erro na autenticação": [
          {
            "group": "403 - Erro na autenticação",
            "field": "403",
            "optional": false,
            "description": "<p>Falha na autenticação do facebook token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "agapeserver/facebook_user.js"
  },
  {
    "type": "post",
    "url": "/createlocaluser/",
    "title": "Cria um usuário com o perfil informado.",
    "name": "PostCreatLocalUser",
    "group": "Login_-_Local",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "username",
            "optional": false,
            "description": "<p>Username do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "<p>SHA1 hash da senha do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "gender",
            "optional": false,
            "description": "<p>Sexo do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "birthday",
            "optional": false,
            "description": "<p>Data de criação do versículo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "denominationID",
            "optional": false,
            "description": "<p>ID da denominação do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "state",
            "optional": false,
            "description": "<p>Estado(localização) do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "<p>Cidade(localização) do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "<p>País(localização) do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso - 200": [
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": ""
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message._id",
            "optional": false,
            "description": "<p>id do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>ok</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Erro na autenticação": [
          {
            "group": "Erro na autenticação",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": "<p>Usuário já existe</p>"
          },
          {
            "group": "Erro na autenticação",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "agapeserver/local_user.js"
  },
  {
    "type": "post",
    "url": "/loginlocalpost/",
    "title": "Loga um usuário com username e senha",
    "name": "PostLoginLocalPost",
    "group": "Login_-_Local",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "username",
            "optional": false,
            "description": "<p>Username do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "<p>SHA1 hash da senha do usuário.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Erro na autenticação": [
          {
            "group": "Erro na autenticação",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": "<p>Senha inválida/Usuário não encontrado</p>"
          },
          {
            "group": "Erro na autenticação",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>failed</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso - 200": [
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": ""
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message._id",
            "optional": false,
            "description": "<p>id do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.password",
            "optional": false,
            "description": "<p>SHA1 hash da senha do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.name",
            "optional": false,
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.email",
            "optional": false,
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.gender",
            "optional": false,
            "description": "<p>Sexo do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "Date",
            "field": "message.birthday",
            "optional": false,
            "description": "<p>Data de nascimento do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.denominationID",
            "optional": false,
            "description": "<p>ID da denominação do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.state",
            "optional": false,
            "description": "<p>Estado(localização) do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.city",
            "optional": false,
            "description": "<p>Cidade(localização) do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.country",
            "optional": false,
            "description": "<p>País(localização) do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>ok</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "<p>O token do servidor para ser usado na autenticação</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "agapeserver/local_user.js"
  },
  {
    "type": "get",
    "url": "/getprayrequest/",
    "title": "Pegar pedido de oração",
    "name": "GetPrayRequest",
    "group": "Pedidos_de_oração",
    "description": "<p>Pega um pedido aleatório no banco de versículos utilizando a seguinte estratégia:    De todos os pedidos que não foi o usuário que criou e que ele ainda não pegou:        Pega os que tem menor SharedWithLength.           Persistindo o empate, pega por CreationDate(menor).</p>",
    "error": {
      "fields": {
        "Erro na autenticação": [
          {
            "group": "Erro na autenticação",
            "field": "403",
            "optional": false,
            "description": "<p>Token não é válido.</p>"
          }
        ],
        "Erro no processo": [
          {
            "group": "Erro no processo",
            "field": "404",
            "optional": false,
            "description": "<p>Algo falhou.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "<p>Token emitido pelo server na hora do login do usuário.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "field": "Content-Type",
            "optional": false,
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso - 200": [
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "_id",
            "optional": false,
            "description": "<p>id do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Description",
            "optional": false,
            "description": "<p>descrição do pedido.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "DateString",
            "field": "EstimatedEndDate",
            "optional": false,
            "description": "<p>data estimada de término.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "Anonymous",
            "optional": false,
            "description": "<p>0/1 para pedidos anônimos.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Author",
            "optional": false,
            "description": "<p>id do criador do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "DateString",
            "field": "CreationDate",
            "optional": false,
            "description": "<p>Data de criação do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String[]",
            "field": "SharedWith",
            "optional": false,
            "description": "<p>Array de ids de usuários com quais o versículo foi compartilhado.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "SharedWithLength",
            "optional": false,
            "description": "<p>Tamanho da propriedade anterior.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "agapeserver/pray_request.js"
  },
  {
    "type": "post",
    "url": "/addprayrequest/",
    "title": "Cadastra um pedido de oração",
    "name": "PostAddPrayRequest",
    "group": "Pedidos_de_oração",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "Description",
            "optional": false,
            "description": "<p>Descrição do pedido, ex: Orem pelas provas do Ivan.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateString",
            "field": "EstimatedEndDate",
            "optional": false,
            "description": "<p>String representando a data estimada de término do pedido no formato ISO 8601.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer (0 ou 1)",
            "field": "Anonymous",
            "optional": false,
            "description": "<p>Se o pedido é anônimo ou não.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de payload para a request de um pedido NÃO ANÔNIMO:",
        "content": "\t{\n\t\t\"Description\"\t\t: \"Orem pelas provas do Ivan\",\n\t\t\"EstimatedEndDate\" : \"2004-02-12T15:19:21+00:00\",\n\t\t\"Anonymous\"\t: 0\n\t}\n"
      }
    ],
    "error": {
      "fields": {
        "Erro na autenticação": [
          {
            "group": "Erro na autenticação",
            "field": "403",
            "optional": false,
            "description": "<p>Token não é válido.</p>"
          }
        ],
        "Erro no processo": [
          {
            "group": "Erro no processo",
            "field": "404",
            "optional": false,
            "description": "<p>Algo falhou.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "<p>Token emitido pelo server na hora do login do usuário.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "field": "Content-Type",
            "optional": false,
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso - 200": [
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "_id",
            "optional": false,
            "description": "<p>id do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Description",
            "optional": false,
            "description": "<p>descrição do pedido.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "DateString",
            "field": "EstimatedEndDate",
            "optional": false,
            "description": "<p>data estimada de término.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "Anonymous",
            "optional": false,
            "description": "<p>0/1 para pedidos anônimos.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Author",
            "optional": false,
            "description": "<p>id do criador do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "DateString",
            "field": "CreationDate",
            "optional": false,
            "description": "<p>Data de criação do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String[]",
            "field": "SharedWith",
            "optional": false,
            "description": "<p>Array de ids de usuários com quais o versículo foi compartilhado.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "SharedWithLength",
            "optional": false,
            "description": "<p>Tamanho da propriedade anterior.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "agapeserver/pray_request.js"
  },
  {
    "type": "post",
    "url": "/addverse/",
    "title": "Cadastrar um versículo",
    "name": "PostAddVerse",
    "group": "Versículos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "Reference",
            "optional": false,
            "description": "<p>Referência da bíblia, ex: &quot;João 5:23-25&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "Comment",
            "optional": false,
            "description": "<p>Comentário do versículo.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de payload para a request:",
        "content": "\t{\n\t\t\"Reference\" : \"João 5:23-25\",\n\t\t\"Comment\"\t: \"Edificante!\"\n\t}\n"
      }
    ],
    "error": {
      "fields": {
        "Erro na autenticação": [
          {
            "group": "Erro na autenticação",
            "field": "403",
            "optional": false,
            "description": "<p>Token não é válido.</p>"
          }
        ],
        "Erro no processo": [
          {
            "group": "Erro no processo",
            "field": "404",
            "optional": false,
            "description": "<p>Algo falhou.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "<p>Token emitido pelo server na hora do login do usuário.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "field": "Content-Type",
            "optional": false,
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso - 200": [
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "_id",
            "optional": false,
            "description": "<p>id do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Comment",
            "optional": false,
            "description": "<p>Comentário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Reference",
            "optional": false,
            "description": "<p>Referência na bíblia.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Author",
            "optional": false,
            "description": "<p>id do criador do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "DateString",
            "field": "CreationDate",
            "optional": false,
            "description": "<p>Data de criação do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String[]",
            "field": "SharedWith",
            "optional": false,
            "description": "<p>Array de ids de usuários com quais o versículo foi compartilhado.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "SharedWithLength",
            "optional": false,
            "description": "<p>Tamanho da propriedade anterior.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "agapeserver/verse.js"
  },
  {
    "type": "get",
    "url": "/getverse/",
    "title": "Pegar versículo",
    "name": "PostGetVerse",
    "group": "Versículos",
    "description": "<p>Pega um versículo aleatório no banco de versículos utilizando a seguinte estratégia:    De todos os versículos que não foi o usuário que criou e que ele ainda não pegou:        Pega os que tem menor SharedWithLength.        Persistindo o empate, pega por CreationDate(menor).</p>",
    "error": {
      "fields": {
        "Erro na autenticação": [
          {
            "group": "Erro na autenticação",
            "field": "403",
            "optional": false,
            "description": "<p>Token não é válido.</p>"
          }
        ],
        "Erro no processo": [
          {
            "group": "Erro no processo",
            "field": "404",
            "optional": false,
            "description": "<p>Algo falhou.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "<p>Token emitido pelo server na hora do login do usuário.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "field": "Content-Type",
            "optional": false,
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso - 200": [
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "_id",
            "optional": false,
            "description": "<p>id do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Comment",
            "optional": false,
            "description": "<p>Comentário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Reference",
            "optional": false,
            "description": "<p>Referência na bíblia.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Author",
            "optional": false,
            "description": "<p>id do criador do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "DateString",
            "field": "CreationDate",
            "optional": false,
            "description": "<p>Data de criação do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String[]",
            "field": "SharedWith",
            "optional": false,
            "description": "<p>Array de ids de usuários com quais o versículo foi compartilhado.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "SharedWithLength",
            "optional": false,
            "description": "<p>Tamanho da propriedade anterior.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "agapeserver/verse.js"
  },
  {
    "error": {
      "fields": {
        "Erro na autenticação": [
          {
            "group": "Erro na autenticação",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": "<p>Senha inválida/Usuário não encontrado</p>"
          },
          {
            "group": "Erro na autenticação",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>failed</p>"
          }
        ]
      }
    },
    "group": "local_user.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "agapeserver/local_user.js"
  },
  {
    "success": {
      "fields": {
        "Sucesso - 200": [
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": ""
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message._id",
            "optional": false,
            "description": "<p>id do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.password",
            "optional": false,
            "description": "<p>SHA1 hash da senha do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.name",
            "optional": false,
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.email",
            "optional": false,
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.gender",
            "optional": false,
            "description": "<p>Sexo do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "Date",
            "field": "message.birthday",
            "optional": false,
            "description": "<p>Data de nascimento do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.denominationID",
            "optional": false,
            "description": "<p>ID da denominação do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.state",
            "optional": false,
            "description": "<p>Estado(localização) do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.city",
            "optional": false,
            "description": "<p>Cidade(localização) do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.country",
            "optional": false,
            "description": "<p>País(localização) do usuário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>ok</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "<p>O token do servidor para ser usado na autenticação</p>"
          }
        ]
      }
    },
    "group": "local_user.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "agapeserver/local_user.js"
  },
  {
    "success": {
      "fields": {
        "Sucesso - 200": [
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "_id",
            "optional": false,
            "description": "<p>id do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Description",
            "optional": false,
            "description": "<p>descrição do pedido.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "DateString",
            "field": "EstimatedEndDate",
            "optional": false,
            "description": "<p>data estimada de término.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "Anonymous",
            "optional": false,
            "description": "<p>0/1 para pedidos anônimos.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Author",
            "optional": false,
            "description": "<p>id do criador do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "DateString",
            "field": "CreationDate",
            "optional": false,
            "description": "<p>Data de criação do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String[]",
            "field": "SharedWith",
            "optional": false,
            "description": "<p>Array de ids de usuários com quais o versículo foi compartilhado.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "SharedWithLength",
            "optional": false,
            "description": "<p>Tamanho da propriedade anterior.</p>"
          }
        ]
      }
    },
    "group": "pray_request.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "agapeserver/pray_request.js"
  },
  {
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "<p>Token emitido pelo server na hora do login do usuário.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "field": "Content-Type",
            "optional": false,
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "group": "verse.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "agapeserver/verse.js"
  },
  {
    "error": {
      "fields": {
        "Erro na autenticação": [
          {
            "group": "Erro na autenticação",
            "field": "403",
            "optional": false,
            "description": "<p>Token não é válido.</p>"
          }
        ],
        "Erro no processo": [
          {
            "group": "Erro no processo",
            "field": "404",
            "optional": false,
            "description": "<p>Algo falhou.</p>"
          }
        ]
      }
    },
    "group": "verse.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "agapeserver/verse.js"
  },
  {
    "success": {
      "fields": {
        "Sucesso": [
          {
            "group": "Sucesso",
            "field": "200",
            "optional": false,
            "description": "<p>Adicionado com sucesso.</p>"
          }
        ]
      }
    },
    "group": "verse.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "agapeserver/verse.js"
  },
  {
    "success": {
      "fields": {
        "Sucesso - 200": [
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "_id",
            "optional": false,
            "description": "<p>id do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Comment",
            "optional": false,
            "description": "<p>Comentário.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Reference",
            "optional": false,
            "description": "<p>Referência na bíblia.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "Author",
            "optional": false,
            "description": "<p>id do criador do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "DateString",
            "field": "CreationDate",
            "optional": false,
            "description": "<p>Data de criação do versículo.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "String[]",
            "field": "SharedWith",
            "optional": false,
            "description": "<p>Array de ids de usuários com quais o versículo foi compartilhado.</p>"
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "SharedWithLength",
            "optional": false,
            "description": "<p>Tamanho da propriedade anterior.</p>"
          }
        ]
      }
    },
    "group": "verse.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "agapeserver/verse.js"
  }
] });