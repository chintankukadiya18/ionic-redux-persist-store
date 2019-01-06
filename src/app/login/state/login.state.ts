import {User} from '../../core/models/user';

export interface LoginState {
  loading: boolean;
  error: boolean;
  user: User;
}
