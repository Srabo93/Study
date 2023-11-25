import FacebookConnector from "./FacebookConnector";
import {
  SocialNetworkConnector,
  SocialNetworkPoster,
} from "./SocialNetworkPoster";

export class FacebookPoster extends SocialNetworkPoster {
  private login: string;
  private password: string;

  constructor(login: string, password: string) {
    super();
    this.login = login;
    this.password = password;
  }

  public getSocialNetwork(): SocialNetworkConnector {
    return new FacebookConnector(this.login, this.password);
  }
}
