import { initTRPC } from "@trpc/server";
import { EventEmitter } from "events";


const trpc  = initTRPC.create();

// event emitter
export const eventEmitter = new EventEmitter()
// Router definition
export const router = trpc.router
// unprotected procedure
export const procedure = trpc.procedure
// protected procedure for auth