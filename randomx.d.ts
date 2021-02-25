export type HashResult = [nonce: string, result: string];
export function batchVM(vm: any, hashes: string[]): Promise<HashResult[]>;
export function createVM(seed: string): Promise<any>;
