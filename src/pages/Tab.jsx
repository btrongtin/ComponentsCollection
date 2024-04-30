import Tabs from '../components/Tab';

const Tab = () => {
  const data = [
    {
      content:
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
      label: 'HTML',
      value: 'html',
    },
    {
      content:
        'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
      label: 'CSS',
      value: 'css',
    },
    {
      content:
        'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
      label: 'Javascript',
      value: 'javascript',
    },
  ];
  return (
    <div className='w-full h-full bg-[#fff] rounded-lg shadow-md'>
      <Tabs data={data} />
    </div>
  );
};

export default Tab;
