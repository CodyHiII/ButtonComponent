import React from 'react';
import Button from '../Button';

import { BsBookmarkHeartFill } from 'react-icons/bs';

import styles from './styles.module.css';

const Display = () => {
  return (
    <div className={styles.container}>
      <section>
        <h1>Style</h1>
        <div className={styles.buttonRow}>
          <Button as='button' variant='primary' size='md'>
            Primary
          </Button>
          <Button as='button' variant='primary' size='md' outline>
            Primary Outline
          </Button>
          <Button as='button' variant='primary' size='md' rounded>
            Primary
          </Button>
          <Button as='button' variant='primary' size='md' rounded outline>
            Primary Outline
          </Button>
        </div>
      </section>
      <section>
        <h1>Size</h1>
        <div className={styles.buttonRow}>
          <Button as='button' variant='primary' size='sm'>
            Small
          </Button>
          <Button as='button' variant='primary' size='md'>
            Medium
          </Button>
          <Button as='button' variant='primary' size='lg'>
            Large
          </Button>
        </div>
        <div className={styles.buttonRow}>
          <Button as='button' variant='primary' size='sm' rounded outline>
            Small
          </Button>
          <Button as='button' variant='primary' size='md' rounded outline>
            Medium
          </Button>
          <Button as='button' variant='primary' size='lg' rounded outline>
            Large
          </Button>
        </div>
      </section>
      <section>
        <h1>Variants</h1>
        <div className={styles.buttonRow}>
          <Button as='button' variant='primary' size='md'>
            Primary
          </Button>
          <Button as='button' variant='secondary' size='md'>
            Secondary
          </Button>
          <Button as='button' variant='tertiary' size='md'>
            Tertiary
          </Button>
          <Button as='button' variant='success' size='md'>
            Success
          </Button>
          <Button as='button' variant='danger' size='md'>
            Danger
          </Button>
          <Button as='button' variant='info' size='md'>
            Info
          </Button>
        </div>
        <div className={styles.buttonRow}>
          <Button as='button' variant='primary' size='md' outline>
            Primary
          </Button>
          <Button as='button' variant='secondary' size='md' outline>
            Secondary
          </Button>
          <Button as='button' variant='tertiary' size='md' outline>
            Tertiary
          </Button>
          <Button as='button' variant='success' size='md' outline>
            Success
          </Button>
          <Button as='button' variant='danger' size='md' outline>
            Danger
          </Button>
          <Button as='button' variant='info' size='md' outline>
            Info
          </Button>
        </div>
      </section>
      <section>
        <h1>Icons</h1>
        <div className={styles.buttonRow}>
          <Button
            as='button'
            variant='primary'
            size='md'
            startIcon={<BsBookmarkHeartFill />}
          >
            Primary
          </Button>
          <Button
            as='button'
            variant='secondary'
            size='md'
            outline
            startIcon={<BsBookmarkHeartFill />}
          >
            Secondary Outline
          </Button>
          <Button
            as='button'
            variant='tertiary'
            size='md'
            rounded
            endIcon={<BsBookmarkHeartFill />}
          >
            Tertiary
          </Button>
          <Button
            as='button'
            variant='danger'
            size='md'
            outline
            rounded
            endIcon={<BsBookmarkHeartFill />}
          >
            Danger Outline
          </Button>
        </div>
      </section>
      <section>
        <h1>Icons Only</h1>
        <div className={styles.buttonRow}>
          <Button
            as='button'
            variant='primary'
            size='smIcon'
            startIcon={<BsBookmarkHeartFill />}
          />
          <Button
            as='button'
            variant='info'
            size='smIcon'
            outline
            rounded
            endIcon={<BsBookmarkHeartFill />}
          />
          <Button
            as='button'
            variant='secondary'
            size='mdIcon'
            outline
            startIcon={<BsBookmarkHeartFill />}
          />
          <Button
            as='button'
            variant='success'
            size='mdIcon'
            rounded
            endIcon={<BsBookmarkHeartFill />}
          />
          <Button
            as='button'
            variant='tertiary'
            size='lgIcon'
            endIcon={<BsBookmarkHeartFill />}
          />
          <Button
            as='button'
            variant='danger'
            size='lgIcon'
            outline
            rounded
            endIcon={<BsBookmarkHeartFill />}
          />
        </div>
      </section>
    </div>
  );
};

export default Display;
