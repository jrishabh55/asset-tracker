import AssetsList from '@/components/assets/assetsList';
import Card from '@/components/card';
import TriggerList from '@/components/trigger/triggerList';

const IndexPage = () => {
  return (
    <div className="flex w-full items-center md:justify-center md:items-start min-w-[28rem] p-10 md:h-full gap-4 flex-col md:flex-row flex-wrap">
      <Card className="max-w-lg flex-grow justify-center" header="Triggers">
        <TriggerList />
      </Card>
      <Card className="max-w-lg flex-grow justify-center" header="Assets">
        <AssetsList />
      </Card>
    </div>
  );
};

export default IndexPage;
