import { ClientConfig, createClient } from 'next-sanity';

export const clientConfig: ClientConfig = {
  projectId: '1nffi0j5',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-03-23',
  token:process.env.SANITY_API_TOKEN };

export const client = createClient(clientConfig);
