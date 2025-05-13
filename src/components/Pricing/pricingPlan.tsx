"use client"
import {
  Box,
  Typography,
  Button,
  Chip,
  List,
  ListItem,
  Paper,
  styled
} from '@mui/material';

interface PricingPlan {
  title: string;
  badge: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  color: string;
  additionalFeatures?: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Tactile",
    badge: "Subscription",
    price: "£7,500",
    period: "/Month",
    description: "Great for teams who work in weekly sprints, and need design and strategy support for improving existing areas or developing new features of their product",
    features: [
      "Dedicated Senior Designer",
      "Weekly Sprint Call",
      "Async Loom updates",
      "Unlimited slack comms"
    ],
    additionalFeatures: [
      "Dedicated Design Director",
      "Scalable with your needs"
    ],
    color: "yellow"
  },
  {
    title: "Immersive",
    badge: "Subscription",
    price: "£15,500",
    period: "/Month",
    description: "For teams who alongside product work need support on brand, marketing and website design & build.",
    features: [
      "Access to our full team",
      "Daily Standups",
      "Async Loom updates",
      "Unlimited slack comms"
    ],
    additionalFeatures: [
      "Dedicated Design Director",
      "Scalable with your needs",
      "Pause or cancel anytime"
    ],
    color: "blue"
  },
  {
    title: "Sprint",
    badge: "Fast Turnaround",
    price: "£10,000",
    description: "2 weeks to deliver a product feature, brand or landing page. A dedicated team of vertical specialists will be assigned to deliver incredible results at breakneck speed.",
    features: [
      "A specially curated team",
      "Weekly Sprint Call",
      "Async Loom updates",
      "Unlimited slack comms"
    ],
    additionalFeatures: [
      "Dedicated Design Director",
      "Scalable with your needs"
    ],
    color: "orange"
  }
];

const PricingCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
}));

const ColorIcon = styled(Box)<{ colortype: string }>(({ theme, colortype }) => ({
  width: 40,
  height: 40,
  borderRadius: 4,
  backgroundColor: 
    colortype === 'yellow' ? '#F7D046' :
    colortype === 'blue' ? '#3B82F6' :
    colortype === 'orange' ? '#FF5533' : 'grey',
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'rgba(255, 255, 255, 0.6)',
  borderRadius: 16,
  fontSize: '0.75rem',
  height: 24,
}));

const BookButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  borderRadius: 50,
  textTransform: 'none',
  padding: '6px 16px',
  fontWeight: 500,
  fontSize: '0.875rem',
  width: '120px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  }
}));

// Style for the anchor tag that wraps the button
const LinkWrapper = styled('a')({
  textDecoration: 'none',
  display: 'inline-block',
});

const FeatureItem = styled(ListItem)(({ theme }) => ({
  padding: '4px 0',
  color: 'rgba(255, 255, 255, 0.6)',
}));

export default function PricingSection() {
  const calendlyLink = "https://calendly.com/d/5c2-3g6-964/haptic";
  
  return (
    <Box component="section" id="pricing" sx={{ 
      backgroundColor: 'black', 
      color: 'white', 
      py: 10,
      px: 3,
      height: '100wh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
          <Box component="span" sx={{ 
            width: 6, 
            height: 6, 
            borderRadius: '50%', 
            backgroundColor: 'white', 
            display: 'inline-block',
            mr: 1.5
          }}/>
          Pricing + Contact
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexGrow: 1, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        {pricingPlans.map((plan, index) => (
          <Box
            key={index}
            sx={{ 
              flex: 1,
              borderRight: index < pricingPlans.length - 1 ? { xs: 'none', md: '1px solid rgba(255,255,255,0.1)' } : 'none',
              borderBottom: index < pricingPlans.length - 1 ? { xs: '1px solid rgba(255,255,255,0.1)', md: 'none' } : 'none',
            }}
          >
            <PricingCard>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, pt: 4 }}>
                <ColorIcon colortype={plan.color} />
                <StyledChip 
                  label={plan.badge === 'Fast Turnaround' ? 'Fast Turnaround' : 'Subscription'} 
                  size="small"
                />
              </Box>

              <Typography variant="h3" sx={{ 
                fontSize: '2rem', 
                fontWeight: 400, 
                mb: 2, 
                mt: 4,
                color: 'white' 
              }}>
                {plan.title}
              </Typography>
              
              <Typography sx={{ 
                color: 'rgba(255, 255, 255, 0.6)', 
                mb: 6,
                fontSize: '0.9rem',
                lineHeight: 1.5,
                minHeight: { md: 100 }
              }}>
                {plan.description}
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography component="span" sx={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 400,
                  color: 'white'
                }}>
                  {plan.price}
                </Typography>
                {plan.period && (
                  <Typography component="span" sx={{ 
                    fontSize: '1rem', 
                    color: 'rgba(255, 255, 255, 0.6)', 
                    ml: 0.5,
                    fontWeight: 300
                  }}>
                    {plan.period}
                  </Typography>
                )}
              </Box>
              
              <LinkWrapper 
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookButton size="small">
                  Book a call
                </BookButton>
              </LinkWrapper>
              
              <Box sx={{ 
                display: 'flex', 
                mt: 8,
                borderTop: '1px solid rgba(255,255,255,0.1)',
                pt: 4
              }}>
                <List sx={{ flex: 1, p: 0 }}>
                  {plan.features.map((feature, idx) => (
                    <FeatureItem key={idx} disableGutters>
                      <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                        {feature}
                      </Typography>
                    </FeatureItem>
                  ))}
                </List>
                
                {plan.additionalFeatures && (
                  <List sx={{ flex: 1, p: 0 }}>
                    {plan.additionalFeatures.map((feature, idx) => (
                      <FeatureItem key={idx} disableGutters>
                        <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                          {feature}
                        </Typography>
                      </FeatureItem>
                    ))}
                  </List>
                )}
              </Box>
            </PricingCard>
          </Box>
        ))}
      </Box>
    </Box>
  );
}