import { DataSource } from 'typeorm';
import { PROVIDER } from '../utils/constants';
import { Answer } from './schemas/Answer';
import { Grant } from './schemas/Grant';
import { Option } from './schemas/Option';
import { OptionAnswer } from './schemas/OptionAnswer';
import { Permission } from './schemas/Permission';
import { Question } from './schemas/Question';
import { Role } from './schemas/Role';
import { Survey } from './schemas/Survey';
import { TextAnswer } from './schemas/TextAnswer';
import { User } from './schemas/User';


export const DatasourceProviders = [
  {
    provide: PROVIDER,
    useFactory: async (): Promise<DataSource> => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'shin66',
        database: 'mydb',
        entities: [
          Answer,
          Grant,
          Option,
          OptionAnswer,
          Permission,
          Question,
          Role,
          Survey,
          TextAnswer,
          User,
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];