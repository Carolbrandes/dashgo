import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    // *ActiveModelSerializer -> cadastrar ou pegar dados na mesma requisicao http, dados em 2 ou mais entidades diferentes
    // *serializer: como os dados devem ser interpretados pelo mirage
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },

        email() {
          return faker.internet.email().toLowerCase();
        },

        createdAt() {
          return faker.date.recent(10); // *usuario deve ter sido criado nos ultimos 10 dias
        },
      }),
    },

    seeds(server) {
      server.createList("user", 200); // *criar 200 usuarios usando o factory user
    },

    routes() {
      this.namespace = "api";
      this.timing = 750; // *vai demora 750 milisegundos para chamada acontecer.
      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.get("/users/:id");

      this.post("/users");

      this.namespace = ""; // *o namespace das rotas do nextjs, definidas na pasta api, tb tem o namespace api, entao nessa linha resetamos o namespace aqui do mirage qd terminarmos de utilizar essas rotas para nao ter problema caso tenha alguma rota na pasta api
      this.passthrough(); // *ele verifica se a chamada q foi feita para api existe no mirage, caso nao exista ele passa a olhar para pasta api do next.
    },
  });

  return server;
}
