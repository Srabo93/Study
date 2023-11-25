import { FacebookPoster } from "./FacebookPoster";
import { LinkedInPoster } from "./LinkedInPoster";
import { SocialNetworkPoster } from "./SocialNetworkPoster";

function clientCode(creator: SocialNetworkPoster) {
  creator.post("This is the user first post");
  creator.post("This is the second post of the user");
}

console.log("User 1:");
clientCode(new FacebookPoster("joe doe", "******"));
console.log("\n\n");
console.log("User 2:");
clientCode(new LinkedInPoster("jane doe", "*******"));
