/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb.png';
import dart from 'assets/images/icons/dart.png';
import rocket from 'assets/images/icons/rocket.png';
import trophy from 'assets/images/icons/trophy.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: 'Simple Integration',
    description: 'We integrate with all your existing data sources and workflows.',
  },
  {
    id: 2,
    icon: dart,
    title: 'Identify Problem Areas',
    description: 'Our models automatically flag potential issues using historical and industry data.',
  },
  {
    id: 3,
    icon: rocket,
    title: 'Boost Performance',
    description: 'Take action quickly using our automated suggestions and requests for repairs.',
  },
  {
    id: 4,
    icon: trophy,
    title: 'Close Deals Faster',
    description: `Close deals faster with confidence, knowing you've checked all the boxes.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.ultimateFeature">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Screen more deals, faster and with high accuracy."
          description="Analyze documents and flag issues in minutes, not hours. We integrate with all your existing data sources and workflows for a seamless experience."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ],
  },
};
