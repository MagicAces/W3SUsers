import soap from "soap";
import asyncHandler from "express-async-handler";

const getUsers = asyncHandler(async (req, res) => {

    try {
        const client = await soap.createClientAsync(process.env.URL, { overridePromiseSuffix: "Promise" });
        const results = await client.getUsersPromise(null);

        const users = results[0].getUsersReturn.data.data;
        res.status(200).json({ users })
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching users");
    }
})

export {
    getUsers
}