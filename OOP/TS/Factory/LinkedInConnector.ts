import { SocialNetworkConnector } from "./SocialNetworkPoster";

export default class LinkedInConnector implements SocialNetworkConnector {
  private login: string;
  private password: string;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }

  public logIn(): void {
    console.log(
      `User has been logged in with ${this.login} and ${this.password}`
    );
  }
  public createPost(content: string) {
    console.log(`User ${this.login} is posting ${content}`);
  }
  public logOut(): void {
    console.log(`User ${this.login} is logged out`);
  }
}
