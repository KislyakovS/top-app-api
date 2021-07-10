import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => ({
  uri: getMongoString(configService),
  ...getMongoOptions(),
});

const getMongoString = (configService: ConfigService) => {
  const login = configService.get('MONGO_LOGIN');
  const password = configService.get('MONGO_PASSWORD');
  const host = configService.get('MONGO_HOST');
  const port = configService.get('MONGO_PORT');
  const auth = configService.get('MONGO_AUTH');

  return `mongodb://${login}:${password}@${host}:${port}/${auth}`;
};

const getMongoOptions = () => ({
  userNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
