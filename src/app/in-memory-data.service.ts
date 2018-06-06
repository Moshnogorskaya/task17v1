import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const repos = [
      {
          id: 1,
          name: 'Windstorm',
          description: 'description',
          language: 'javascript',
          html_url: '#',
          stargazers_count: 5
        },
        {
          id: 1,
          name: 'Windstorm',
          description: 'description',
          language: 'javascript',
          html_url: '#',
          stargazers_count: 5
        },
        {
          id: 1,
          name: 'Windstorm',
          description: 'description',
          language: 'javascript',
          html_url: '#',
          stargazers_count: 5
        },
        {
          id: 1,
          name: 'Windstorm',
          description: 'description',
          language: 'javascript',
          html_url: '#',
          stargazers_count: 5
        },
        {
          id: 1,
          name: 'Windstorm',
          description: 'description',
          language: 'javascript',
          html_url: '#',
          stargazers_count: 5
        }
  ];
    return {repos};
  }
}
