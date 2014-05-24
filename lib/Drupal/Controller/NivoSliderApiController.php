<?php
/**
 * Created by PhpStorm.
 * User: dima
 * Date: 5/24/14
 * Time: 11:18 AM
 */
namespace Drupal\nivo_slider_api\Controller;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\node\NodeInterface;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class NivoSliderApiController implements ContainerInjectionInterface {

  /**
   * Constructs a BookController object.
   *
   * @param \Drupal\book\BookManagerInterface $bookManager
   *   The book manager.
   * @param \Drupal\book\BookExport $bookExport
   *   The book export service.
   */
  public function __construct() {

  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {

  }

  /**
   * Returns an administrative overview of all books.
   *
   * @return array
   *   A render array representing the administrative page content.
   *
   */
  public function adminOverview() {
    return 'test';
  }
}
