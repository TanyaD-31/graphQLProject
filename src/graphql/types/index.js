import {mergeTypes} from "merge-graphql-schemas";
import User from "./User";
import Recipe from "./Recipe";

const typeDefs = [User, Recipe];

export default mergeTypes(typeDefs, {all: true});