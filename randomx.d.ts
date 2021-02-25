export type Hashes = [nonce: string, result: string];
export function batchVM(vm: any, hashes: Hashes[]): Promise<Hashes[]>;
export function createVM(seed: string): Promise<any>;
