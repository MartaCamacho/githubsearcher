import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';

const RepoComponent = ({ repo }) => {
  const shortenText = (text, limit) => {
    if (text.length > 100) {
      return `${text.substr(0, limit)}...`;
    } else {
      return text;
    }
  };

  return (
    <span className="repo-card-container">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <Card
          variant="outlined"
          sx={{
            width: '100%',
            maxWidth: 345,
            marginTop: 4,
            marginBottom: 4,
            height: '100%',
          }}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="user image">
                <Image
                  src={repo.owner.avatar_url}
                  width="100"
                  height="100"
                  alt="user image"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Avatar>
            }
            title={<span className="results-label">{repo.owner.login}</span>}
            subheader={
              <div>
                <div>Created: {repo.created_at.substr(0, 10)}</div>
                <div>Last edit: {repo.pushed_at.substr(0, 10)}</div>
              </div>
            }
          />
          <CardContent>
            <Typography>
              <span className="results-label">Name:</span> {repo.name || 'N/A'}
            </Typography>
            <Typography>
              <span className="results-label">Description:</span>{' '}
              {repo.description || 'N/A'}
            </Typography>
            <Typography>
              <span className="results-label">Topics:</span>{' '}
              {repo.topics.length ? (
                repo.topics.map((topic, i) => {
                  if (i > 5) {
                    return '';
                  } else if (i < repo.topics.length - 1) {
                    return `${topic}, `;
                  } else {
                    return topic;
                  }
                })
              ) : (
                <></>
              )}
            </Typography>
            <Typography>
              <span className="results-label">Language:</span>{' '}
              {repo.language || 'N/A'}
            </Typography>
            <div className="stars-number">
              <span>
                <StarIcon />
              </span>{' '}
              {repo.stargazers_count}
            </div>
          </CardContent>
        </Card>
      </a>
    </span>
  );
};

export default RepoComponent;
