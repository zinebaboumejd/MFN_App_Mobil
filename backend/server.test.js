

const request = require("supertest");
let server ;

const user=require('./banck/Auth/models/authModel')

describe("user", () => {
    beforeEach(() => { server = require("./server"); });
    afterEach(async () => {
        server.close();
        await user.deleteMany({})
    });
    describe("GET /", () => {
        it("should return 200", async () => {
            const res = await request(server).get("/auth/getUser");
            expect(res.status).toBe(200);
        });
    });
    describe("GET /hello", () => {
        it("should return 200", async () => {
            const res = await request(server).get("/get/hello");
            expect(res.status).toBe(200);
        });
    }
    );
}
);

















