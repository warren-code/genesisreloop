# ReLoop Platform System Design

## Implementation Approach

### Overview
The ReLoop Platform will be built as a modern web application that connects waste providers, process operators, and product buyers in a comprehensive circular economy ecosystem. Based on the PRD, our architecture needs to support:

1. **Value Chain Management** - Detailed documentation of 100+ value chains with interconnected components
2. **Marketplace Functionality** - Enabling trading of feedstock materials and finished products
3. **Community Network** - Building a global community of nodes with visualization capabilities
4. **Decentralized Governance** - Supporting community-driven decision making through token-based voting
5. **Subscription Model** - Tiered subscription plans for businesses with various service levels

### Technology Stack

#### Frontend
- **Framework**: Next.js with React for server-side rendering and optimal performance
- **Styling**: Tailwind CSS for utility-first styling with a glassmorphic design system
- **UI Components**: Shadcn UI for consistent design elements
- **3D Visualization**: Three.js for the interactive 3D globe showing nodes and trade flows
- **Animation**: Framer Motion for smooth transitions and animations
- **State Management**: Redux Toolkit for global state with RTK Query for data fetching

#### Backend
- **API Framework**: Node.js with Express for the REST API
- **GraphQL**: Apollo Server for complex data queries
- **Authentication**: NextAuth.js with JWT tokens
- **Database**: PostgreSQL for relational data storage
- **Caching**: Redis for performance optimization and real-time features
- **Search**: Elasticsearch for advanced searching capabilities
- **File Storage**: S3-compatible object storage for media and documents
- **Real-time Communication**: Socket.io for live updates and messaging

#### DevOps & Infrastructure
- **Hosting**: Containerized deployment on Kubernetes
- **CI/CD**: GitHub Actions for continuous integration and deployment
- **Monitoring**: Prometheus and Grafana
- **CDN**: Cloudflare for content delivery and DDoS protection

#### Decentralized Governance
- **Voting System**: Custom implementation with cryptographic verification
- **Proposal Management**: Smart contract-like system for creating and tracking proposals
- **Token Management**: Integration with wallet services for token-based voting rights

### Key Implementation Challenges

1. **Scale and Performance** - Supporting 10,000+ concurrent users and 1,000+ transactions per hour
2. **Complex Data Relationships** - Managing interconnected value chains, nodes, and marketplace activities
3. **Real-time Visualization** - Rendering the 3D globe with live trade flows efficiently
4. **Governance Implementation** - Building a secure and transparent decentralized voting system
5. **Global Deployment** - Ensuring low latency for users worldwide through multi-region infrastructure

### Open Source Libraries

- **Database ORM**: Prisma for type-safe database access
- **Validation**: Zod for schema validation across frontend and backend
- **Visualization**: D3.js for data-driven visualizations
- **Mapping**: Mapbox GL JS for location-based features
- **Form Handling**: React Hook Form for efficient form management
- **Date/Time**: date-fns for date manipulation
- **Analytics**: PostHog for usage tracking
- **Markdown Rendering**: MDX for rich content in value chain documentation
- **Internationalization**: next-intl for multi-language support
- **Testing**: Jest and React Testing Library

## Data Structures and Interfaces

The data model for the ReLoop platform must support complex relationships between value chains, users, marketplace activities, and community governance while maintaining high performance and scalability.

### Core Data Models

```typescript
// Key data models with TypeScript type annotations
interface User {
  id: string;
  email: string;
  name: string;
  organization?: string;
  role: UserRole;
  profileImage?: string;
  location?: GeoLocation;
  skills: Skill[];
  subscriptionTier?: SubscriptionTier;
  subscriptionStatus: SubscriptionStatus;
  walletAddress?: string;
  votingPower: number;
  createdAt: Date;
  updatedAt: Date;
}

interface ValueChain {
  id: string;
  name: string;
  description: string;
  category: ValueChainCategory;
  difficulty: number; // 1-10 scale
  profitability: number; // 1-10 scale
  sustainability: number; // 1-10 scale
  feedstock: Feedstock;
  process: ChemHubProcess;
  product: LoopCraftedProduct;
  createdAt: Date;
  updatedAt: Date;
  version: string;
  status: PublicationStatus;
}

interface Feedstock {
  id: string;
  name: string;
  description: string;
  images: string[];
  sourceTypes: string[];
  industries: string[];
  collectionMethods: string[];
  storageRequirements: string[];
  seasonalVariations?: string;
  valueChains: ValueChain[];
  listings: FeedstockListing[];
  createdAt: Date;
  updatedAt: Date;
}

interface ChemHubProcess {
  id: string;
  name: string;
  description: string;
  flowDiagram: string;
  scientificBasis: string;
  steps: ProcessStep[];
  equipment: Equipment[];
  safetyConsiderations: string[];
  startupCosts: CostBreakdown;
  operationalCosts: CostBreakdown;
  revenueProjections: RevenueProjection[];
  requiredSkills: Skill[];
  recommendedTeam: TeamComposition;
  trainingResources: Resource[];
  valueChains: ValueChain[];
  createdAt: Date;
  updatedAt: Date;
}

interface LoopCraftedProduct {
  id: string;
  name: string;
  description: string;
  images: string[];
  applications: string[];
  marketValue: PriceRange;
  demandTrends: TrendData[];
  certifications: string[];
  technicalSpecs: TechnicalSpecification[];
  testingMethods: string[];
  valueChains: ValueChain[];
  listings: ProductListing[];
  createdAt: Date;
  updatedAt: Date;
}

interface Node {
  id: string;
  name: string;
  description: string;
  owner: User;
  location: GeoLocation;
  activeValueChains: ValueChain[];
  processes: ChemHubProcess[];
  inputs: Feedstock[];
  outputs: LoopCraftedProduct[];
  images: string[];
  publicContactInfo: ContactInfo;
  currentOffers: (FeedstockListing | ProductListing)[];
  currentNeeds: MaterialNeed[];
  createdAt: Date;
  updatedAt: Date;
}

interface Listing {
  id: string;
  seller: User;
  title: string;
  description: string;
  price: number;
  currency: Currency;
  quantity: number;
  unit: Unit;
  location: GeoLocation;
  images: string[];
  status: ListingStatus;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
}

interface FeedstockListing extends Listing {
  feedstock: Feedstock;
  quality: QualityParameters;
  collectionDate?: Date;
}

interface ProductListing extends Listing {
  product: LoopCraftedProduct;
  qualityGrade: QualityGrade;
  productionDate: Date;
}

interface Transaction {
  id: string;
  buyer: User;
  seller: User;
  listing: Listing;
  quantity: number;
  totalPrice: number;
  currency: Currency;
  status: TransactionStatus;
  paymentMethod: PaymentMethod;
  shippingDetails: ShippingDetails;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
}

interface Subscription {
  id: string;
  user: User;
  tier: SubscriptionTier;
  status: SubscriptionStatus;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  paymentMethod: PaymentMethod;
  features: Feature[];
  createdAt: Date;
  updatedAt: Date;
}

interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  creator: User;
  category: ProposalCategory;
  status: ProposalStatus;
  votingStartDate: Date;
  votingEndDate: Date;
  votes: Vote[];
  documents: Document[];
  comments: Comment[];
  implementationPlan?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Vote {
  id: string;
  user: User;
  proposal: GovernanceProposal;
  voteType: VoteType;
  votingPower: number;
  rationale?: string;
  createdAt: Date;
}
```

### Enums and Types

```typescript
enum UserRole {
  ADMIN = 'ADMIN',
  NODE_OPERATOR = 'NODE_OPERATOR',
  WASTE_PROVIDER = 'WASTE_PROVIDER',
  PRODUCT_BUYER = 'PRODUCT_BUYER',
  PROFESSIONAL = 'PROFESSIONAL',
  BASIC_USER = 'BASIC_USER'
}

enum SubscriptionTier {
  FREE = 'FREE',
  BASIC = 'BASIC',
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM'
}

enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  PAST_DUE = 'PAST_DUE',
  CANCELED = 'CANCELED',
  TRIALING = 'TRIALING'
}

enum ValueChainCategory {
  PLASTIC = 'PLASTIC',
  TEXTILE = 'TEXTILE',
  FOOD_WASTE = 'FOOD_WASTE',
  ELECTRONICS = 'ELECTRONICS',
  CONSTRUCTION = 'CONSTRUCTION',
  METALS = 'METALS',
  GLASS = 'GLASS',
  PAPER = 'PAPER',
  CHEMICALS = 'CHEMICALS',
  OTHER = 'OTHER'
}

enum ListingStatus {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  SOLD = 'SOLD',
  EXPIRED = 'EXPIRED',
  CANCELED = 'CANCELED'
}

enum TransactionStatus {
  INITIATED = 'INITIATED',
  PAYMENT_PENDING = 'PAYMENT_PENDING',
  PAID = 'PAID',
  SHIPPING = 'SHIPPING',
  COMPLETED = 'COMPLETED',
  DISPUTED = 'DISPUTED',
  REFUNDED = 'REFUNDED',
  CANCELED = 'CANCELED'
}

enum ProposalStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  VOTING = 'VOTING',
  PASSED = 'PASSED',
  REJECTED = 'REJECTED',
  IMPLEMENTED = 'IMPLEMENTED'
}

enum ProposalCategory {
  PLATFORM = 'PLATFORM',
  VALUE_CHAIN = 'VALUE_CHAIN',
  GOVERNANCE = 'GOVERNANCE',
  STANDARDS = 'STANDARDS',
  FEATURE = 'FEATURE',
  OTHER = 'OTHER'
}

enum VoteType {
  YES = 'YES',
  NO = 'NO',
  ABSTAIN = 'ABSTAIN'
}

type GeoLocation = {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  region?: string;
  country: string;
  postalCode?: string;
};

type ProcessStep = {
  order: number;
  title: string;
  description: string;
  duration: string;
  equipment: Equipment[];
  materials: Material[];
  safetyWarnings?: string[];
  images?: string[];
};

type Equipment = {
  name: string;
  description: string;
  estimatedCost: PriceRange;
  suppliers?: Supplier[];
  specifications: string[];
  image?: string;
};

type CostBreakdown = {
  equipmentCosts: number;
  facilityCosts: number;
  laborCosts: number;
  materialCosts: number;
  licensingCosts: number;
  otherCosts: number;
  totalCost: number;
  currency: Currency;
  breakdown: {[key: string]: number};
};

type RevenueProjection = {
  timeframe: string;
  lowEstimate: number;
  highEstimate: number;
  averageEstimate: number;
  currency: Currency;
  assumptions: string[];
};

type TeamComposition = {
  roles: {
    title: string;
    count: number;
    skills: string[];
    responsibilities: string[];
    estimatedSalary: PriceRange;
  }[];
};

type PriceRange = {
  min: number;
  max: number;
  currency: Currency;
};

type TrendData = {
  period: string;
  value: number;
  trend: 'INCREASING' | 'STABLE' | 'DECREASING';
  notes?: string;
};

type TechnicalSpecification = {
  property: string;
  value: string;
  unit: string;
  testMethod?: string;
};

type MaterialNeed = {
  material: Feedstock | LoopCraftedProduct;
  quantity: number;
  unit: Unit;
  frequencyOfNeed: string;
  notes?: string;
};

type QualityParameters = {
  purity: number;
  contamination: number;
  moisture: number;
  customParameters: {[key: string]: number};
};

type QualityGrade = 'A' | 'B' | 'C' | 'D';

type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY';

type Unit = 'KG' | 'TON' | 'LITER' | 'CUBIC_METER' | 'PIECE';

type ShippingDetails = {
  method: string;
  carrier?: string;
  trackingNumber?: string;
  estimatedDelivery?: Date;
  shippingAddress: GeoLocation;
  cost: number;
  currency: Currency;
};

type Feature = {
  name: string;
  description: string;
  enabled: boolean;
};
```

### API Endpoints

#### Authentication & User Management

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh-token
POST /api/auth/logout
GET /api/auth/me

GET /api/users/:id
PATCH /api/users/:id
GET /api/users/:id/skills
POST /api/users/:id/skills
```

#### Value Chain Management

```
GET /api/value-chains
GET /api/value-chains/:id
GET /api/value-chains/categories
GET /api/value-chains/featured

GET /api/feedstocks
GET /api/feedstocks/:id
GET /api/feedstocks/:id/value-chains

GET /api/processes
GET /api/processes/:id
GET /api/processes/:id/equipment
GET /api/processes/:id/steps

GET /api/products
GET /api/products/:id
GET /api/products/:id/specifications
```

#### Marketplace

```
GET /api/listings
GET /api/listings/:id
POST /api/listings
PUT /api/listings/:id
DELETE /api/listings/:id

GET /api/listings/feedstock
GET /api/listings/products

POST /api/transactions
GET /api/transactions/:id
GET /api/transactions/user/:userId
PATCH /api/transactions/:id/status

POST /api/transactions/:id/messages
GET /api/transactions/:id/messages
```

#### Community & Nodes

```
GET /api/nodes
GET /api/nodes/:id
POST /api/nodes
PUT /api/nodes/:id

GET /api/nodes/map
GET /api/nodes/globe-data
GET /api/nodes/trade-flows

GET /api/events
GET /api/events/:id
POST /api/events

GET /api/forum/topics
GET /api/forum/topics/:id
POST /api/forum/topics
POST /api/forum/topics/:id/posts
```

#### Governance

```
GET /api/governance/proposals
GET /api/governance/proposals/:id
POST /api/governance/proposals
PUT /api/governance/proposals/:id

GET /api/governance/proposals/:id/votes
POST /api/governance/proposals/:id/votes

GET /api/governance/voting-power/:userId
GET /api/governance/proposals/:id/status

POST /api/governance/proposals/:id/comments
GET /api/governance/proposals/:id/comments
```

#### Subscription Management

```
GET /api/subscriptions
GET /api/subscriptions/:id
GET /api/subscriptions/tiers
POST /api/subscriptions
PATCH /api/subscriptions/:id
DELETE /api/subscriptions/:id

POST /api/payments/create-checkout
POST /api/payments/webhook
```

### Class Relationships

The system architecture will involve several interconnected modules that work together to provide the complete platform functionality.

## Program Call Flow

### Key Flows and Interactions

1. **User Registration and Onboarding**
2. **Value Chain Exploration**
3. **Node Registration and Management**
4. **Marketplace Listing and Transaction**
5. **Governance Proposal and Voting**
6. **Subscription Management**

### Architecture Diagram

The ReLoop platform architecture can be visualized as follows:

```
┌─────────────┐     ┌─────────────┐      ┌─────────────┐
│   Frontend  │◄────►│  API Layer  │◄─────►│  Services  │
└─────────────┘     └─────────────┘      └─────────────┘
                                               │
                                         ┌─────▼─────┐
                                         │ Database  │
                                         └───────────┘
```

#### Frontend Components
- Next.js Pages & Components
- Three.js Visualization 
- Redux State Management
- Authentication Context

#### API Layer
- REST API Endpoints
- GraphQL Server
- WebSocket Server
- Authentication & Authorization

#### Service Layer
- User Service
- Value Chain Service
- Marketplace Service
- Community Service
- Governance Service
- Subscription Service
- Notification Service

#### Database Layer
- PostgreSQL Database
- Redis Cache
- Elasticsearch Index
- S3 Object Storage

### Additional Considerations

#### Security
- HTTPS enforcement
- JWT token authentication
- Role-based access control
- Rate limiting
- Data encryption
- Input validation
- CSRF protection

#### Scalability
- Containerized microservices
- Horizontal scaling
- Database sharding for large tables
- Read replicas for high-traffic queries
- CDN for static assets
- Caching strategy

#### Performance
- Server-side rendering for initial loads
- Client-side transitions for interactivity
- Optimized database queries
- Query batching and pagination
- Asset optimization
- Lazy loading of components

## Subscription Model Implementation

The subscription model will be implemented as follows:

### Subscription Tiers

1. **Free Tier**
   - Basic account access
   - Limited marketplace listings
   - View-only access to value chains
   - No governance participation

2. **Basic Tier** (Entry-level for startups)
   - Additional marketplace listings
   - Full access to value chain documentation
   - Limited governance voting power
   - Basic analytics

3. **Standard Tier**
   - Increased marketplace listings
   - Priority in search results
   - Enhanced governance voting power
   - Advanced analytics
   - API access

4. **Premium Tier**
   - Unlimited marketplace listings
   - Featured positioning
   - Maximum governance voting power
   - Comprehensive analytics
   - Priority support
   - Advanced API access

### Subscription Service

The subscription service will handle:
- Tier management
- Billing cycles
- Payment processing
- Feature access control
- Subscription status changes
- Usage tracking

### Payment Integration

The payment processing will integrate with popular payment processors to handle:
- Initial subscription setup
- Recurring billing
- Payment method changes
- Invoicing
- Refunds and credits

## Decentralized Governance Implementation

The decentralized governance mechanism will be implemented as follows:

### Token-Based Voting

1. **Voting Power Allocation**
   - Based on subscription tier
   - Adjusted by participation history
   - Enhanced by node operation history

2. **Proposal System**
   - Creation and submission of proposals
   - Discussion period
   - Voting period
   - Implementation tracking

3. **Multi-tiered Governance Structure**
   - Local node governance
   - Regional hub governance
   - Global network governance

### Governance Service

The governance service will handle:
- Proposal lifecycle management
- Vote counting and verification
- Result calculation and publication
- Implementation tracking
- Transparency reporting

## Anything UNCLEAR

1. **Token Implementation Details**:
   - Will the platform use an actual cryptocurrency token or a platform-specific point system?
   - If using cryptocurrency, which blockchain infrastructure will be used?

2. **Identity Verification**:
   - What level of identity verification is required for different roles?
   - How will verification be handled for node operators vs casual users?

3. **Regulatory Compliance**:
   - What specific regulations must be considered for marketplace transactions?
   - How will cross-border transactions be handled?

4. **Data Privacy**:
   - What personal data is stored and how is it protected according to GDPR and other regulations?
   - How will data sharing between nodes be managed securely?

5. **Integration Details**:
   - What specific third-party systems need integration (payment processors, logistics providers, etc.)?
   - What level of API access should be provided to external systems?

These aspects should be clarified during the detailed design phase to ensure all requirements are properly addressed in the implementation.