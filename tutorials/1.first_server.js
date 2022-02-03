import Fastify from "fastify";
const fastify = Fastify({ logger: true });

fastify.get("/", async (request, reply) => ({ hello: "world" }));

const start = async () => {
  try {
    await fastify.listen(3002);
  } catch (e) {
    fastify.log.error(e);
    process.exit(1);
  }
};
export default start;
