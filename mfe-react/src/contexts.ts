import { createContext } from "react";

import { User } from "./models/User";

export const UsersContext = createContext<Array<User>>([]);