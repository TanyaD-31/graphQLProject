import {mergeResolvers} from "merge-graphql-schemas";
import User from "./User";
import Recipe from "./Recipe";

const resolvers = [User, Recipe];

export default mergeResolvers(resolvers);