type UploadProps = {
  variant: 'moment' | 'bucket';
};

const Upload = ({ variant }: UploadProps) => {
  return <span>{variant} 인증 페이지</span>;
};

export default Upload;
