import * as user from "@utils/async/example";

jest.mock("../request");
// async/await can be used.


it("works with async/await", async () => {
    expect.assertions(1);
    const data = await user.getUserName(4);
    expect(data).toEqual("Mark");
});
