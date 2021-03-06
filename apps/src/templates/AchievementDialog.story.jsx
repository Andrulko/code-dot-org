import React from 'react';
import AchievementDialog from './AchievementDialog';
import ExampleDialogButton from '../util/ExampleDialogButton';

export default storybook => {
  return storybook
    .storiesOf('AchievementDialog', module)
    .addStoryTable([
      {
        name: 'Got all achievements',
        description: '3 checked boxes',
        story: () => (
          <ExampleDialogButton>
            <AchievementDialog
              achievements={[
                {
                  check: true,
                  msg: 'Puzzle completed!',
                  progress: 0.02,
                }, {
                  check: true,
                  msg: 'Fewer than 12 block used!',
                  progress: 0.04,
                }, {
                  check: true,
                  msg: 'Bonus: Using no hints',
                  progress: 0.04,
                },
              ]}
              assetUrl={url => '/blockly/' + url}
              feedbackMessage={'Congratulations! You completed Puzzle 1.'}
              oldStageProgress={0.25}
              onContinue={storybook.action('continue')}
              showPuzzleRatingButtons={true}
              showStageProgress={true}
              encourageRetry={false}
            />
          </ExampleDialogButton>
        )
      }, {
        name: 'Failed to get one achievement, encourage retry',
        description: '2 checked boxes, 1 unchcked box',
        story: () => (
          <ExampleDialogButton>
            <AchievementDialog
              achievements={[
                {
                  check: true,
                  msg: 'Puzzle completed!',
                  progress: 0.02,
                }, {
                  check: false,
                  msg: 'Using too many blocks',
                  progress: 0.0,
                }, {
                  check: true,
                  msg: 'Bonus: Using no hints',
                  progress: 0.04,
                },
              ]}
              actualBlocks={5}
              assetUrl={url => '/blockly/' + url}
              feedbackMessage={'Congratulations! You completed Puzzle 2.'}
              oldStageProgress={0.25}
              onContinue={storybook.action('continue')}
              showPuzzleRatingButtons={true}
              showStageProgress={true}
              encourageRetry={true}
            />
          </ExampleDialogButton>
        )
      }, {
        name: 'Not showing some achievements',
        description: '2 checked boxes',
        story: () => (
          <ExampleDialogButton>
            <AchievementDialog
              achievements={[
                {
                  check: true,
                  msg: 'Puzzle completed!',
                  progress: 0.02,
                }, {
                  check: false,
                  msg: 'Using too many blocks',
                  progress: 0.04,
                },
              ]}
              actualBlocks={5}
              assetUrl={url => '/blockly/' + url}
              feedbackMessage={'Congratulations! You completed Puzzle 3.'}
              oldStageProgress={0.25}
              onContinue={storybook.action('continue')}
              showPuzzleRatingButtons={true}
              showStageProgress={true}
              encourageRetry={false}
            />
          </ExampleDialogButton>
        )
      }, {
        name: 'No puzzle rating buttons',
        description: 'The funometer is optional',
        story: () => (
          <ExampleDialogButton>
            <AchievementDialog
              achievements={[
                {
                  check: true,
                  msg: 'Puzzle completed!',
                  progress: 0.02,
                }, {
                  check: false,
                  msg: 'Using too many blocks',
                  progress: 0.04,
                },
              ]}
              actualBlocks={5}
              assetUrl={url => '/blockly/' + url}
              feedbackMessage={'Congratulations! You completed Puzzle 4.'}
              oldStageProgress={0.25}
              onContinue={storybook.action('continue')}
              showPuzzleRatingButtons={false}
              showStageProgress={true}
              encourageRetry={false}
            />
          </ExampleDialogButton>
        )
      }
    ]);
};
