import LinkedInConnector from "./LinkedInConnector";
import {
  SocialNetworkConnector,
  SocialNetworkPoster,
} from "./SocialNetworkPoster";

export class LinkedInPoster extends SocialNetworkPoster {
  private login: string;
  private password: string;

  constructor(login: string, password: string) {
    super();
    this.login = login;
    this.password = password;
  }

  public getSocialNetwork(): SocialNetworkConnector {
    return new LinkedInConnector(this.login, this.password);
  }
}
