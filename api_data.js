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
            "description": "Facebook accesstoken do usuário."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "facebookuserid",
            "optional": false,
            "description": "User id do usuário no facebook."
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
            "description": "id do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "profile.name",
            "optional": false,
            "description": "Nome do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "profile.email",
            "optional": false,
            "description": "Email do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "profile.gender",
            "optional": false,
            "description": "Sexo do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "Date",
            "field": "profile.birthday",
            "optional": false,
            "description": "Data de nascimento do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "created_now",
            "optional": false,
            "description": "YES/NO"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "O token do servidor para ser usado na autenticação"
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
            "description": "Falha na autenticação do facebook token."
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./facebook_user.js"
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
            "description": "Username do usuário."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "SHA1 hash da senha do usuário."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "Nome do usuário."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": "Email do usuário."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "gender",
            "optional": false,
            "description": "Sexo do usuário."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "birthday",
            "optional": false,
            "description": "Data de criação do versículo."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "denominationID",
            "optional": false,
            "description": "ID da denominação do usuário."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "state",
            "optional": false,
            "description": "Estado(localização) do usuário."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": "Cidade(localização) do usuário."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "country",
            "optional": false,
            "description": "País(localização) do usuário."
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
            "description": "id do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "ok"
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
            "description": "Usuário já existe"
          },
          {
            "group": "Erro na autenticação",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "failed"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./local_user.js"
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
            "description": "Username do usuário."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "SHA1 hash da senha do usuário."
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
            "description": "Senha inválida/Usuário não encontrado"
          },
          {
            "group": "Erro na autenticação",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "failed"
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
            "description": "id do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.password",
            "optional": false,
            "description": "SHA1 hash da senha do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.name",
            "optional": false,
            "description": "Nome do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.email",
            "optional": false,
            "description": "Email do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.gender",
            "optional": false,
            "description": "Sexo do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "Date",
            "field": "message.birthday",
            "optional": false,
            "description": "Data de nascimento do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.denominationID",
            "optional": false,
            "description": "ID da denominação do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.state",
            "optional": false,
            "description": "Estado(localização) do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.city",
            "optional": false,
            "description": "Cidade(localização) do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.country",
            "optional": false,
            "description": "País(localização) do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "ok"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "O token do servidor para ser usado na autenticação"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./local_user.js"
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
            "description": "Referência da bíblia, ex: \"João 5:23-25\"."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "Comment",
            "optional": false,
            "description": "Comentário do versículo."
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
            "description": "Token não é válido."
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
            "description": "Token emitido pelo server na hora do login do usuário."
          },
          {
            "group": "Header",
            "type": "String",
            "field": "Content-Type",
            "optional": false,
            "description": "application/json."
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
            "description": "id do versículo."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "author",
            "optional": false,
            "description": "id do criador do versículo."
          },
          {
            "group": "Sucesso - 200",
            "type": "Date",
            "field": "CreationDate",
            "optional": false,
            "description": "Data de criação do versículo."
          },
          {
            "group": "Sucesso - 200",
            "type": "String[]",
            "field": "SharedWith",
            "optional": false,
            "description": "Array de ids de usuários com quais o versículo foi compartilhado."
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "SharedWithLength",
            "optional": false,
            "description": "Tamanho da propriedade anterior."
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./verse.js"
  },
  {
    "type": "get",
    "url": "/getverse/",
    "title": "Pegar versículo",
    "name": "PostGetVerse",
    "group": "Versículos",
    "description": "Pega um versículo aleatório no banco de versículos utilizando a seguinte estratégia:\n\t>\tDe todos os versículos que não foi o usuário que criou e que ele ainda não pegou:\n\t   >\tPega os que tem menor SharedWithLength.\n\t   >\tPersistindo o empate, pega por CreationDate(menor).",
    "error": {
      "fields": {
        "Erro na autenticação": [
          {
            "group": "Erro na autenticação",
            "field": "403",
            "optional": false,
            "description": "Token não é válido."
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
            "description": "Token emitido pelo server na hora do login do usuário."
          },
          {
            "group": "Header",
            "type": "String",
            "field": "Content-Type",
            "optional": false,
            "description": "application/json."
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
            "description": "id do versículo."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "author",
            "optional": false,
            "description": "id do criador do versículo."
          },
          {
            "group": "Sucesso - 200",
            "type": "Date",
            "field": "CreationDate",
            "optional": false,
            "description": "Data de criação do versículo."
          },
          {
            "group": "Sucesso - 200",
            "type": "String[]",
            "field": "SharedWith",
            "optional": false,
            "description": "Array de ids de usuários com quais o versículo foi compartilhado."
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "SharedWithLength",
            "optional": false,
            "description": "Tamanho da propriedade anterior."
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./verse.js"
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
            "description": "id do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.password",
            "optional": false,
            "description": "SHA1 hash da senha do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.name",
            "optional": false,
            "description": "Nome do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.email",
            "optional": false,
            "description": "Email do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.gender",
            "optional": false,
            "description": "Sexo do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "Date",
            "field": "message.birthday",
            "optional": false,
            "description": "Data de nascimento do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.denominationID",
            "optional": false,
            "description": "ID da denominação do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.state",
            "optional": false,
            "description": "Estado(localização) do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.city",
            "optional": false,
            "description": "Cidade(localização) do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "message.country",
            "optional": false,
            "description": "País(localização) do usuário."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "ok"
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "O token do servidor para ser usado na autenticação"
          }
        ]
      }
    },
    "group": "local_user.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./local_user.js"
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
            "description": "Senha inválida/Usuário não encontrado"
          },
          {
            "group": "Erro na autenticação",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "failed"
          }
        ]
      }
    },
    "group": "local_user.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./local_user.js"
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
            "description": "Token emitido pelo server na hora do login do usuário."
          },
          {
            "group": "Header",
            "type": "String",
            "field": "Content-Type",
            "optional": false,
            "description": "application/json."
          }
        ]
      }
    },
    "group": "verse.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./verse.js"
  },
  {
    "error": {
      "fields": {
        "Erro na autenticação": [
          {
            "group": "Erro na autenticação",
            "field": "403",
            "optional": false,
            "description": "Token não é válido."
          }
        ]
      }
    },
    "group": "verse.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./verse.js"
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
            "description": "id do versículo."
          },
          {
            "group": "Sucesso - 200",
            "type": "String",
            "field": "author",
            "optional": false,
            "description": "id do criador do versículo."
          },
          {
            "group": "Sucesso - 200",
            "type": "Date",
            "field": "CreationDate",
            "optional": false,
            "description": "Data de criação do versículo."
          },
          {
            "group": "Sucesso - 200",
            "type": "String[]",
            "field": "SharedWith",
            "optional": false,
            "description": "Array de ids de usuários com quais o versículo foi compartilhado."
          },
          {
            "group": "Sucesso - 200",
            "type": "int",
            "field": "SharedWithLength",
            "optional": false,
            "description": "Tamanho da propriedade anterior."
          }
        ]
      }
    },
    "group": "verse.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./verse.js"
  }
] });