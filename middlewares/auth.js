import { z } from "zod";

export default function auth(req, res, next) {
  const { username, password } = req.body || {};
}
