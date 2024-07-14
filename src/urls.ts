import { GITHUB_REPO_NAME } from "./consts";

export function resolve(asset: string): string {
    if(asset.startsWith('/')) {
        return `/${GITHUB_REPO_NAME}${asset}`;    
    }
    return `/${GITHUB_REPO_NAME}/${asset}`;
}