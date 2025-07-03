import { StaticImageData } from "next/image";

export interface DeveloperAvatar {
    id: number,
    avatarUrl: StaticImageData
    name: string,
    location: string,
    skills: string [],
    experience: string,
    timeZone: string,
}