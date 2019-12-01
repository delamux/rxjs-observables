import { GithubUser } from "./github-user.interface";

export interface GithubUserResp {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}