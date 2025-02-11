import { MyRepositoryListType } from "@/type/user";

export type ApiInstanceProps = {
    endPoint: string;
    method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
    body?: unknown;
};

export type RepositoryData = {
    message: string;
    data: MyRepositoryListType[];
    status: string;
};

export type PostFetchMessengerProps = {
    repositoryId: number | undefined;
    messengerType: string | null;
    webhookUrl: string | null;
};
