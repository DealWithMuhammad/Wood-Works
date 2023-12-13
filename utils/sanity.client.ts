import { ClientConfig, createClient } from 'next-sanity';


export const clientConfig: ClientConfig = {
  projectId: '1nffi0j5',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-03-23',
  token:
    "skfDOXGryrIeLRG8696qjP64IgOYK2FRY5JpdJwUYDhshgrfaV3YzMWPeVatS2fvnJTr5lpsEoBoXUhfRSmIjTloK6jXTyfhqoiaTfUgrKoOwDAyXanvW0cUIfttuWtvsvw9BEjwOyv3QyprfS8v8MjQOuSU7we5p3ooGBfqSMlu33RBUaVD"
};

export const client = createClient(clientConfig);
