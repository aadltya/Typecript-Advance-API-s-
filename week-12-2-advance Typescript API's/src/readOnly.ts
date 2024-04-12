type UserName = {
    name: string,
    age: number
    password: string  
}

const user: Readonly<UserName> = {
    name: "john",
    age: 22,
    password: "sasad"
}

// user.age = 56 //gives error

interface Config {
    endpoint: string;
    apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.