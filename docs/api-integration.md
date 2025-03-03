2. Create `docs/api-integration.md`:

```markdown
---
sidebar_position: 2
---

# API Integration

This document explains how the Crypto Price Tracker fetches and updates cryptocurrency data.

## API Service

We use the [CoinGecko API](https://www.coingecko.com/en/api/documentation) to fetch cryptocurrency data. The API integration is handled in the `services/api.ts` file.

### Endpoints Used

- `/coins/markets`: Fetches a list of cryptocurrencies with their current market data

### Data Model

Each cryptocurrency object contains the following information:

```typescript
interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  last_updated: string;
}